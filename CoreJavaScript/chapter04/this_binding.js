var obj = {
  abc: function () {
    var innerrFunc = () => {
      console.log(this, a, b);
    };
    innerrFunc();
  },
};
