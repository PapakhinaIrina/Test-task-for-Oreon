import './App.css';

function App() {
  const CurrentTime = new Date();
  let time = [];

  const isOverSix = CurrentTime.getHours() >= 6;

  for (let i = 6; i <= 23; i++) {
    time.push(`${i}:00`, `${i}:15`, `${i}:30`, `${i}:45`)
  };
  const go = time.find(el=> {
    if(CurrentTime.getMinutes() <= 10){
      // eslint-disable-next-line
      return  el === CurrentTime.getHours()+":"+'15'
    }
    if(CurrentTime.getMinutes() > 10 && CurrentTime.getMinutes() <= 25){
      // eslint-disable-next-line
      return  el === CurrentTime.getHours()+":"+'30'
    }
    if(CurrentTime.getMinutes() >= 25 && CurrentTime.getMinutes() <= 40){
      // eslint-disable-next-line
      return  el === CurrentTime.getHours()+":"+'45'
    }
    if(CurrentTime.getMinutes() >= 55){
      // eslint-disable-next-line
      const hour = CurrentTime.getHours() + 1
      return  el ===`${hour}:15`
    }
    const hour = CurrentTime.getHours() + 1
    return el ===`${hour}:00`
  });

  const hour = go?.slice(-2) === '00' ? +go?.slice(0,2)-1 : +go?.slice(0,2);
  const min = go?.slice(-2) === '00'? 55 : +go?.slice(-2)-5;
  const goOut = `${hour}:${min}`;

  return (
  <div className="App">
    <div className='wrapper'>
      {isOverSix ? (
        <>
      Сейчас: {CurrentTime.getHours()}:{CurrentTime.getMinutes() }
      <br/>
      Вам необходимо выйти в {goOut}
      <br/>
      Cледующий автобус в {go}
        </>
      )
      :
      (
        `Нужно выйти в 5:55`
      )
      }
    </div>
  </div>
  )
}
export default App;