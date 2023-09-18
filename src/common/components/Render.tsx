
import { isEmpty } from 'lodash';
import { IState, IUser } from '../utils/hooks/type';
import RenderIf from './RenderIf';
import React from 'react';

type IProps={
  state:IState,
  data:IUser[],
  children:React.ReactNode
}

const UserRender = ({ state, data, children }: IProps) => {
	return (
		<>
			<RenderIf value={state === 'fetching'}>
				<div className='wrapper'>
					<p className='text-lg'>Fetching</p>
				</div>
			</RenderIf>
			<RenderIf value={state === 'loading'}>
				<div className='wrapper'>
					<p className='text-lg'>Loading</p>
				</div>
			</RenderIf>
			<RenderIf value={state === 'success' && !isEmpty(data)}>{children}</RenderIf>
			<RenderIf value={state === 'error'}>
				<div className='wrapper'>
					<p className='text-lg text-error'>Error occurred while fetching data.</p>
				</div>
			</RenderIf>
		</>
	);
};

const MemoizedUserRender = React.memo(UserRender);

export default MemoizedUserRender;