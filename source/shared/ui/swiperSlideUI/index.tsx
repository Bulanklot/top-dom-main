import styles from './styles/styles.module.scss'

export const SwiperSlideUI = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Строительство домов</h1>
      <div>
        <p>По индивидуальному или готовому проекту</p>
      </div>
      <button>
        Рассчитать стоимость дома{' '}
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
          <path
            d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 8V9H8V8V7H7V8Z"
            fill="black"
          />
          <path
            d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 8V9H8V8V7H7V8Z"
            fill="url(#paint0_linear_1512_8388)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1512_8388"
              x1="-1"
              y1="13"
              x2="8.30272"
              y2="8.44482"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#177CCE" />
              <stop offset="0.5" stop-color="#24A3F9" />
              <stop offset="1" stop-color="#56CCFB" />
            </linearGradient>
          </defs>
        </svg>{' '}
      </button>
    </div>
  )
}
