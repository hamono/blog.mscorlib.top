import React from 'react';
import BlockWrapper from '../BlockWrapper';
import { list } from './style.scss';

export interface ListRenderProps {
  ordered: boolean;
  start?: number | string;
  type: string;
}

export default React.memo(function ListRender({
  ordered,
  start,
  children
}: React.PropsWithChildren<ListRenderProps>) {
  if (ordered) {
    return (
      <BlockWrapper>
        <ol start={Number(start)} className={list}>
          {children}
        </ol>
      </BlockWrapper>
    );
  }
  return (
    <BlockWrapper>
      <ul className={list}>{children}</ul>
    </BlockWrapper>
  );
});
