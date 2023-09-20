import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { CircleOutLineIcon } from '@/components/Icons';
import { BodyStatsGraph } from '@/components/BodyStatsGraph';
import * as http from '@/utils/http';

// import scss
import styles from './Achievement.module.scss';
const cx = classNames.bind(styles);

function Achievement() {
  const [achievement, setAchievement] = useState([]);
  useEffect(() => {
    const getAchievement = async () => {
      try {
        const res = await http.get('/api/v1/achievement');

        if (res.status === true) {
          setAchievement(res.data);
          return true;
        }

        return false;
      } catch (e) {
        console.error(e);
        return [];
      }
    };

    getAchievement();
  }, []);

  return (
    <section className={cx('achievement-wrapper')}>
      <div className={cx('achievement')}>
        <CircleOutLineIcon />
        <label>
          {achievement?.date ?? '05/12'}
          <span> {achievement?.percent ?? 75}%</span>
        </label>
      </div>
      <div className={cx('graph')}>
        <BodyStatsGraph />
      </div>
    </section>
  );
}

export default Achievement;
