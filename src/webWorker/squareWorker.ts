self.onmessage = (e) => {
  const num = e.data;
  let result = num * num;

  self.postMessage(result);
};
