import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { CupIcon, KnifeIcon } from '@/components/icons';
import * as http from '@/utils/http';

// import scss
import styles from './MealType.module.scss';
const cx = classNames.bind(styles);

function MealType() {
  const [mealTypes, setMealTypes] = useState([]);
  useEffect(() => {
    const getMealTypes = async () => {
      try {
        const res = await http.get('/api/v1/meal-types');

        if (res.status === true) {
          setMealTypes(res.data);
          return true;
        }

        return false;
      } catch (e) {
        console.error(e);
        return [];
      }
    };
    getMealTypes();
  }, []);

  return (
    <section className={cx('meal-type-wrapper')}>
      <ul>
        {mealTypes?.map((mealType) => (
          <li key={mealType.type}>
            {mealType.type !== 'snack' ? <KnifeIcon /> : <CupIcon />}
            <label>{mealType.name}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MealType;
