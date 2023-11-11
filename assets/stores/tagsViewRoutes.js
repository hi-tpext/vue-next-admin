window.useTagsViewRoutes = Pinia.defineStore('tagsViewRoutes', {
	state: () => ({
		tagsViewRoutes: [],
		isTagsViewCurrenFull: false,
	}),
	actions: {
		async setTagsViewRoutes(data) {
			this.tagsViewRoutes = data;
		},
		setCurrenFullscreen(bool) {
			Session.set('isTagsViewCurrenFull', bool);
			this.isTagsViewCurrenFull = bool;
		},
	},
});