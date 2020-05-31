export function signOut() {
  return new Promise((resolve) => {
    resolve();
  });
}

export function signInWithGoogle() {
  return new Promise((resolve) => {
    resolve({
      user: {
        uid: "123",
        displayName: "Julian",
      },
    });
  });
}
