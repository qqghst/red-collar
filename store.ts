import { createStore, createEvent } from 'effector';

//для изменения цвета модели в хэдере, футере
export const hoverMannequin = createEvent();
export const resetHoverMannequin = createEvent();
export const $hoverStore = createStore(false)
	.on(hoverMannequin, () => true)
	.reset(resetHoverMannequin);

//для изменения цвета модели в projects
export const hoverProjectModel = createEvent();
export const resetHoverProjectModel = createEvent();
export const $hoverStoreProjects = createStore(false)
	.on(hoverProjectModel, () => true)
	.reset(resetHoverProjectModel);

//изменение цвета бэкграунда в projects
export const hoverProject = createEvent();
export const unhoverProject = createEvent();

export const $ExpandedStore = createStore(false)
	.on(hoverProject, () => true)
	.reset(unhoverProject);

export const $BackgroundColorStore = createStore('transparent')
	.on(hoverProject, (_, color) => color)
	.reset(unhoverProject);
