import React from 'react';


type Props = {
	value: boolean;
	children: React.ReactNode;
};

const RenderIf = ({ value, children }: Props) => {
	if (value) {
		return <>{children}</>;
	} else {
		return null;
	}
};

export default RenderIf;
