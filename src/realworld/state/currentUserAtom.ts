import { atom, useAtom } from 'jotai';

const currentUserAtom = atom<null | User>(null);

function useCurrentUserAtom(){
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  function register(user: User){    
    login(user)
  }

  function login(user: User){
    setCurrentUser(user);
  }

  return { currentUser, register, login };
}

export default useCurrentUserAtom;