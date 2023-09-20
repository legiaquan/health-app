import classNames from 'classnames/bind';

// import component
import { Layout } from '@/layouts/Layout';
import { Achievement } from '@/components/Achievement';
import { MealType } from '@/components/MealType';
import { MealHistory } from '@/components/MealHistory';
import { Button } from '@/components/Button';

// import scss
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <Layout>
      <main className={cx('home')}>
        <Achievement />
        <MealType />
        <MealHistory />
        <div className={cx('btn-load-more-wrapper')}>
          <Button className={cx('btn-load-more')}>記録をもっと見る</Button>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
