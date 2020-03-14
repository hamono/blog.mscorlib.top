import React from 'react';
import style from './style.scss';
import { Link } from 'web-router';
import { Blog } from '../interface';

function formatTime(time: number) {
  const date = new Date(time);
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

export default React.memo(function BlogItem({
  title,
  birthTime,
  modifyTime,
  types
}: Blog) {
  const path = types.join('/');
  return (
    <div className={style.blogListItemContainer}>
      <Link
        to={`/blog/${path ? `${path}/` : ''}${title.replace(/ /g, '-')}`}
        className={style.title}
        title={title}
      >
        {title}
      </Link>
      <div className={style.footer}>
        <span className={style.text}>发布于 {formatTime(birthTime)}</span>
        <span className={style.text}>修改于 {formatTime(modifyTime)}</span>
      </div>
    </div>
  );
});
