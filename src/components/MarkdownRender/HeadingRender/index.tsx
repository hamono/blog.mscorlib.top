import * as React from 'react';
import { Tokens } from 'marked';
import { renderText } from '../TextRender';
import BlockWrapper from '../BlockWrapper';
import * as style from './style.scss';
import { Icon } from 'antd';
import * as classNames from 'classnames';
import HrRender from '../HrRender';

export default React.memo(function HeadingRender({ depth, text }: Tokens.Heading) {
  const Tag = `h${depth}`;
  const idMatch = text.match(/(.+) +{#(.+)}/);
  const id = (idMatch ? idMatch[2] : text).replace(/ /g, '-').toLowerCase();
  const txt = idMatch ? idMatch[1] : text;
  return (
    <BlockWrapper>
      <Tag className={classNames(style.h, style[Tag])} id={id}>
        {renderText(txt)}
        <a href={`#${id}`} className={style.link}>
          <Icon type="link" />
        </a>
      </Tag>
      {depth === 1 && <HrRender />}
    </BlockWrapper>
  )
})