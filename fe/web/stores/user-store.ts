import { create } from 'zustand';

interface UserInfoType {
  phoneNumber: string;
  randomKey: string;
  userPassword: string;
  userName: string;
  userNickname: string;
  paymentPassword: string;
  isLogin: boolean;
  balance: number;
}

interface UserInfoState {
  userInfo: UserInfoType;
}

interface UserInfoActions {
  setPhoneNumber: (value: string) => void;
  setPassword: (value: string) => void;
  setUserName: (value: string) => void;
  setUserNickname: (value: string) => void;
  setPaymentPassword: (value: string) => void;
  setRandomKey: (value: string) => void;
  setIsLogin: (value: boolean) => void;
  setBalance: (value: number) => void;
}

const defaultState = {
  phoneNumber: '01011112222',
  randomKey: 'dsawrbzsdf',
  userPassword: '1q2w3e4r!@#$',
  userName: '김범수',
  userNickname: 'zl존범수',
  paymentPassword: '000111',
  isLogin: false,
  balance: 24100,
};

const useUserStore = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,

  setPhoneNumber: (phoneNumber) =>
    set((state) => ({
      userInfo: {
        phoneNumber: phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: state.userInfo.userPassword,
        userName: state.userInfo.userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: state.userInfo.balance,
      },
    })),
  setPassword: (userPassword) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: userPassword,
        userName: state.userInfo.userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: state.userInfo.balance,
      },
    })),
  setUserName: (userName) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: state.userInfo.userPassword,
        userName: userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: state.userInfo.balance,
      },
    })),
  setUserNickname: (userNickname) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: state.userInfo.userPassword,
        userName: state.userInfo.userName,
        userNickname: userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: state.userInfo.balance,
      },
    })),
  setPaymentPassword: (paymentPassword) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: state.userInfo.userPassword,
        userName: state.userInfo.userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: state.userInfo.balance,
      },
    })),
  setRandomKey: (randomKey) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: randomKey,
        userPassword: state.userInfo.userPassword,
        userName: state.userInfo.userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: state.userInfo.balance,
      },
    })),
  setIsLogin: (isLogin) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: state.userInfo.userPassword,
        userName: state.userInfo.userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: isLogin,
        balance: state.userInfo.balance,
      },
    })),

  setBalance: (balance) =>
    set((state) => ({
      userInfo: {
        phoneNumber: state.userInfo.phoneNumber,
        randomKey: state.userInfo.randomKey,
        userPassword: state.userInfo.userPassword,
        userName: state.userInfo.userName,
        userNickname: state.userInfo.userNickname,
        paymentPassword: state.userInfo.paymentPassword,
        isLogin: state.userInfo.isLogin,
        balance: balance,
      },
    })),
}));

export default useUserStore;
