import { getArticles } from '@/api'

const PROMISE_DELAY = 2000

export const state = {
	responseData: [],
	responseError: '',
	authorLabel: ''
}

export const getters = {
	articles: state => state.responseData,
	hasArticles: state => state.responseData.length > 0
}

export const mutations = {
  saveArticles(state, articles) {
		articles.forEach(element => {
			state.responseData.push(
				{
					'url': element.url,
					'image': element.urlToImage,
					'description': element.description,
					'author': element.author,
					'authorLabel': state.authorLabel,
					'title': element.title
				}
			);
		})
	},
	saveError(state, error) {
		state.responseError = error.message;
	},
	saveAuthorLabel(state, text) {
		state.authorLabel = text;
	}
}

export const actions = {
	getArticles({ commit }) {
    return new Promise((resolve, reject) => {
			getArticles()
        .then(res => {
          setTimeout(() => {
            const posts = res.data.articles
            commit('saveArticles', posts)
            resolve(posts)
          }, PROMISE_DELAY)
        })
        .catch(error => reject(error))
    })
	}
}