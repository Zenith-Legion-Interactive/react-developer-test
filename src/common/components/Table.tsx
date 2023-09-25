
import { IUser } from '../utils/hooks/type';
import { isEmpty } from 'lodash';


type KeyOfType<T> = Extract<keyof T, string>;


//  this allow to pass string,object and array of object as property key
export type PropertyKey<T extends object | string> = { key: KeyOfType<T> | string; nestedKey?: string } | string;


interface TableDataProps<T extends IUser> {
	data: T[];
	head: string[];
	href?: string;
	clsx?: string;
	isProfile?: boolean;
	propertyKeys: PropertyKey<T>[];
}





const MemoizedTableRows = <T extends IUser>({ data, head, clsx, isProfile, href, propertyKeys }: TableDataProps<T>) => {


	return (
		<table>
			<thead>
				<tr>
					{head.map((h, index) => (
						<th key={index}>{h}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{!isEmpty(data) &&
					data.slice(0, 10).map((item) => (
						<tr key={item.id}>
							{isProfile ? (
								<>
									<td>
										<a role='route' data-href={href} className={clsx} href={!isEmpty(href) ? `profile/${item.id}` : ''}>
											{item.firstName} {item.lastName}
										</a>
									</td>
									<td>
										<img src={item.picture} className='img-rounded' />
									</td>
									{/* <td>{item.location.city}</td> */}
								</>
							) : (
								<td>
									<a role='route' data-href={href} className={clsx} href={!isEmpty(href) ? `profile/${item.id}` : ''}>
										{item.firstName} {item.lastName}
									</a>
								</td>
							)}

							{
								!isEmpty(propertyKeys) && propertyKeys.map((key) => {
									if (typeof key === 'string') {
										return <td key={key}>{item[key as keyof IUser] as string}</td>;
									}
									if (typeof key === 'object') {
										return <td key={key.key}>{key.nestedKey ? (item[key.key as keyof IUser] as Record<string, string>)[key.nestedKey] : null}</td>;
									}
								})
							}
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default MemoizedTableRows;
