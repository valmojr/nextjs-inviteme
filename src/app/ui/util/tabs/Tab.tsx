import React from 'react';
import { ComponentProps } from 'react';

export function TabRoot(props: any) {
	let activeTab: string = 'teste123';

	const setActiveTab = (tab: string) => {
		activeTab = tab;
	};

	const renderChildren = () => {
		return React.Children.map(props.children, (child) => {
			return React.cloneElement(child, {
				activeTab,
				setActiveTab,
			});
		});
	};

	return <div>{renderChildren()}</div>;
}

export function TabList(
	props: {
		children: React.ReactNode;
	} & ComponentProps<'div'>
) {
	return <div>{props.children}</div>;
}

export function TabListItem(
	props: {
		children: React.ReactNode;
		contentRef: string;
		tabFunction: (tab: string) => void;
	} & ComponentProps<'div'>
) {
	return <div>{props.children}</div>;
}

export function TabContent(
	props: {
		children: React.ReactNode;
		activeTab: string;
		setActiveTab: (tab: string) => void;
	} & ComponentProps<'div'>
) {
	const renderChildren = () => {
		return React.Children.map(props.children, (child) => {
			return React.cloneElement(child, {
				activeTab: props.activeTab,
				setActiveTab: props.setActiveTab,
			});
		});
	};

	return (
		<div>
			<h1>{props.activeTab}</h1>
			{props.children}
		</div>
	);
}

export function TabContentItem(
	props: {
		children: React.ReactNode;
		contentRef: string;
	} & ComponentProps<'div'>
) {
	return <div>{props.children}</div>;
}

const Tab = {
	TabRoot,
	TabList,
	TabListItem,
	TabContent,
	TabContentItem,
};

export default Tab;
