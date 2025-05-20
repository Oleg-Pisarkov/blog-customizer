import type { Meta, StoryObj } from '@storybook/react';

import { ArticleParamsForm } from './ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

const meta: Meta<typeof ArticleParamsForm> = {
	component: ArticleParamsForm,
};

export default meta;

type Story = StoryObj<typeof ArticleParamsForm>;

export const ArticleParamsFormStory: Story = {
	render: () => {
		return (
			<ArticleParamsForm
				articleState={defaultArticleState}
				setArticleState={() => {}}
			/>
		);
	},
};
