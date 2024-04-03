import { AmountDonateButtonList } from '@/components/AmountButtonList';
import Header from '@/components/Header';
import KeyPad from '../_components/KeyPad';
import { commaizeNumber, formatToKRW } from '@toss/utils';
import { useRouter } from 'next/router';
import styles from '@/styles/DirectDonationPage.module.scss';
import useDonateMoneyInfo from '@/hooks/useDirectDonationStore';
import { useQuery } from '@tanstack/react-query';
import { getBalance } from '@/api/paymentAxios';

type KeyElement = string | number | JSX.Element;
function directDonation() {
  const router = useRouter();
  const { donateMoneyInfo, pushNumber, popNumber } = useDonateMoneyInfo();

  function handleClickNumber(v: KeyElement) {
    pushNumber(Number(v));
  }
  function handleClickDelete(v: KeyElement) {
    popNumber();
  }
  function handleClickConfirm(v: KeyElement) {
    router.push('/fundraising/confirm');
  }
  const { data, isLoading } = useQuery({
    queryKey: ['balance-donate'],
    queryFn: getBalance,
  });

  function 송금금액() {
    return (
      <p
        className={`${styles.amount} ${donateMoneyInfo.송금금액 <= 0 ? styles.empty : ''}`}
      >
        {donateMoneyInfo.송금금액 > 0
          ? commaizeNumber(donateMoneyInfo.송금금액) + '원'
          : '얼마를 보낼까요?'}
      </p>
    );
  }

  function 송금금액_설명() {
    if (donateMoneyInfo.송금금액 === 0) {
      return;
    }
    if (donateMoneyInfo.송금금액 > data) {
      return <p className={styles.invalid}>출금가능금액 부족</p>;
    } else if (donateMoneyInfo.송금금액 > donateMoneyInfo.남은금액) {
      return <p className={styles.invalid}>더 이상 기부 불가</p>;
    } else {
      return <>{formatToKRW(donateMoneyInfo.송금금액)}</>;
    }
  }

  if (!isLoading) {
    return (
      <div className={styles.container}>
        <Header>직접 기부하기</Header>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <div>
              <p className={styles.receiver}>{donateMoneyInfo.기관명}</p>
              <p className={styles.receiverAccount}>
                남은 모금액 {commaizeNumber(donateMoneyInfo.남은금액)}원
              </p>
            </div>
            <div>
              <송금금액 />
              <송금금액_설명 />
            </div>

            <div>
              <div className={styles.senderInfo}>
                <span className="bank">{donateMoneyInfo.송금은행}</span>
                <span className="deposit">{commaizeNumber(data)}원</span>
              </div>
              <AmountDonateButtonList />
            </div>
          </div>
        </main>
        <KeyPad
          onClickNumber={handleClickNumber}
          onClickDelete={handleClickDelete}
          onClickConfirm={handleClickConfirm}
          isValid={
            donateMoneyInfo.송금금액 > 0 &&
            donateMoneyInfo.송금금액 <= data &&
            donateMoneyInfo.송금금액 <= donateMoneyInfo.남은금액
          }
        />
      </div>
    );
  }
}

export default directDonation;
