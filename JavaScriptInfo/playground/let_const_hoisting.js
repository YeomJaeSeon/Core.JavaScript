let foo = 1;
{
  console.log(foo); // TDZ!
  let foo = 2;
}
