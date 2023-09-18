import RenderIf from "../common/components/RenderIf";
import useDummyApiHandler from "../common/utils/hooks/useDummyApiHandler";
import '../common/styles/UserList.css';
import { isEmpty } from 'lodash';


const UserList = () => {

  const { state, users } = useDummyApiHandler('user');



  return (
		<div>
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
					<table border={1}>
						<thead>
							<th>Name</th>
							<th>Email</th>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td className='font-bold'>
										{user.firstName} {user.lastName}
									</td>
									<td className='font-semi-bold'>{user.email}</td>
								</tr>
							))}
						</tbody>
					</table>
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
