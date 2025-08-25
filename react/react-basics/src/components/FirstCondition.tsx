export default function FirstCondition() {
  const num: number = Math.floor(Math.random() * 100);
  return (
    <>
      <h2>this is comp with condition</h2>
      <h3>num is: {num}</h3>
      {num > 40 ? <>bigger than 40!</> : <>less than 40 :(</>}
    </>
  );
}
