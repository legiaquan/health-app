import classNames from 'classnames/bind';

// import scss
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('wrapper')}>
        <ul>
          <li>会員登録</li>
          <li>運営会社</li>
          <li>利用規約</li>
          <li>個人情報の取扱について</li>
          <li>特定商取引法に基づく表記</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
