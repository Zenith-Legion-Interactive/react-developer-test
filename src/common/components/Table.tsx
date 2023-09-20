
import { IUser } from '../utils/hooks/type';
import { isEmpty } from 'lodash';


type KeyOfType<T> = Extract<keyof T, string>;

export interface PropertyKey {
	key: KeyOfType<T> | string; // Allow both string keys and nested property objects
	nestedKey?: string; // Optional nested key
}

interface TableDataProps<T extends IUser> {
	data: T[];
	head: string[];
	href?: string;
	clsx?: string;
	isProfile?: boolean;
	propertyKeys: PropertyKey[];
}

function isPropertyKey(obj: any): obj is PropertyKey {
	return typeof obj === 'object' && 'key' in obj && 'nestedKey' in obj;
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

							{propertyKeys.map((key) => (
								<td key={isPropertyKey(key) ? `${key.key}-${key.nestedKey}` : String(key)}>{isPropertyKey(key) ? (key.nestedKey ? (item[key.key as keyof IUser] as Record<string, string>)[key.nestedKey] : undefined) : (item[key as keyof IUser] as string)}</td>
							))}
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default MemoizedTableRows;
