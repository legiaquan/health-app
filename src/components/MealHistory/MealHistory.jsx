import classNames from 'classnames/bind';

import * as http from '@/utils/http';

// import scss
import styles from './MealHistory.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function MealHistory() {
  const [mealHistories, setMealHistories] = useState([]);
  useEffect(() => {
    const getMealHistories = async () => {
      try {
        const res = await http.get('/api/v1/meal-histories');

        if (res.status === true) {
          setMealHistories(res.data);
          return true;
        }

        return false;
      } catch (e) {
        console.error(e);
        return [];
      }
    };
    getMealHistories();
  }, []);
  return (
    <section className={cx('meal-history-wrapper')}>
      {mealHistories?.map((meal) => (
        <div
          key={meal.id}
          style={{ backgroundImage: `url(${meal.image})` }}
          className={cx('history-item')}
        >
          <div className={cx('history-item__tag')}>
            <span>
              {meal.date}.{meal.type?.name}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MealHistory;
