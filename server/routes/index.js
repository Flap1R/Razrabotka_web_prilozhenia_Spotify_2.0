const { Router } = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const albumRouter = require('./albumRouter');
const artistRouter = require('./artistRouter');
const trackHistoryRouter = require('./trackHistoryRouter');
const trackQueueRouter = require('./trackQueueRouter');
const trackRouter = require('./trackRouter');
const searchRouter = require('./searchRouter');

router.use('/user', userRouter);
router.use('/trackQueue', trackQueueRouter);
router.use('/album', albumRouter);
router.use('/search', searchRouter);
router.use('/track', trackRouter);
router.use('/trackHistory', trackHistoryRouter);
router.use('/artist', artistRouter);

module.exports = router