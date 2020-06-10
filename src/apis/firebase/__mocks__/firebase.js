export function signOut() {
  return Promise.resolve();
}

export function signInWithGoogle() {
  return Promise.resolve({
    user: {
      uid: "123",
      displayName: "Julian",
    },
  });
}
