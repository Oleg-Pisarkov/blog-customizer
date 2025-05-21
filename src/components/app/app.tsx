import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src//components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src//constants/articleProps';
import styles from 'src/styles/index.module.scss';
import { CSSProperties, useState } from 'react';

export const App = () => {
	const [articalState, setArticalState] = useState(defaultArticleState);
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articalState.fontFamilyOption.value,
					'--font-size': articalState.fontSizeOption.value,
					'--font-color': articalState.fontColor.value,
					'--container-width': articalState.contentWidth.value,
					'--bg-color': articalState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={articalState}
				setArticleState={setArticalState}
			/>
			<Article />
		</main>
	);
};
