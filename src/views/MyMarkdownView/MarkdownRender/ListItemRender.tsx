import * as React from 'react';

export interface ListItemRenderProps{
  checked?:boolean;
  task:boolean;
  type:string;
}

export default class ListItemRender extends React.PureComponent<ListItemRenderProps>{
  public render() {
    console.log('ListItemRenderProps; ', this.props);
    return <li>{this.props.children}</li>
  }
}