/*eslint-disable */

schedule(done => {
  setTimeout(() => {
    warn('Scheduled a callback');
    done();
  });
});
