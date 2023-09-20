import RenderIf from "../common/components/RenderIf";
import useDummyApiHandler from "../common/utils/hooks/useDummyApiHandler";

import { isEmpty } from 'lodash';
import MemoizedTableRows, { PropertyKey } from '../common/components/Table';




const UserList = () => {

  const { state, users } = useDummyApiHandler('user',true);

	  const propertyKeysToShow: PropertyKey[] = ['email' as unknown as PropertyKey];
		const header = ['Name', 'Email'];


  return (
		<div>
			<input type='hidden' data-testid='getStatus' value={state} />
			<input type='hidden' data-testid='getUserList' value={users.length} />
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
			<RenderIf value={state === 'success' && !isEmpty(users)}>
				<div className='wrapper'>
					<MemoizedTableRows data={users} head={header} href='true' propertyKeys={propertyKeysToShow} />
				</div>
			</RenderIf>
			<RenderIf value={state === 'error'}>
				<div className='wrapper'>
					<p className='text-lg text-error'>Error occurred while fetching data.</p>
				</div>
			</RenderIf>
		</div>
	);
}

export default UserList
