import classNames from 'classnames/bind';

// import component
import {
  MenuIcon,
  InfoIcon,
  ChallengeIcon,
  MemoIcon,
  CloseICon,
} from '@/components/Icons';

// import scss
import styles from './HeaderMenu.module.scss';
const cx = classNames.bind(styles);

function HeaderMenu() {
  return (
    <header className={cx('menu')}>
      <div className={cx('wrapper')}>
        <a href="/">
          <img src="/images/logo.png" />
        </a>
        <ul>
          <li>
            <InfoIcon /> 自分の記録
          </li>
          <li>
            <ChallengeIcon /> チャレンジ
          </li>
          <li>
            <MemoIcon /> お知らせ
          </li>
          <li>
            <span className={cx('open')}>
              <MenuIcon />
            </span>
            <span className={cx('close')}>
              <CloseICon />
            </span>
            <ul className={cx('submenu')}>
              <li>自分の記録</li>
              <li>体重グラフ</li>
              <li>目標</li>
              <li>選択中のコース</li>
              <li>コラム一覧</li>
              <li>設定</li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderMenu;
