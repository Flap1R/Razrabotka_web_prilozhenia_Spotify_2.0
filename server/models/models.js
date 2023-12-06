const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
}, {
    tableName: 'user',  // Имя таблицы в базе данных
    timestamps: false   // Не создавать поля createdAt и UpdateAt
});

const Track_queue = sequelize.define('track_queue', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_trach: { type: DataTypes.DATE, allowNull: false },
    id_user: { type: DataTypes.STRING, allowNull: false },
    id_album: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: false
});

const Track_history = sequelize.define('track_history', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    id_track: { type: DataTypes.INTEGER, allowNull: false },
    id_album: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
}, {
    tableName: 'track_history',
    timestamps: false
});


const Track = sequelize.define('track', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    id_artist: { type: DataTypes.INTEGER, allowNull: false },
    path128: { type: DataTypes.STRING, allowNull: false },
    path320: { type: DataTypes.STRING, allowNull: false },
}, {
    tableName: 'track',
    timestamps: false
});

const Track_album = sequelize.define('track_album', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_track: { type: DataTypes.INTEGER, allowNull: false },
    id_album: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: 'track_album',
    timestamps: false
});

const Album = sequelize.define('album', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    id_artist: { type: DataTypes.INTEGER, allowNull: false },
    track_count: { type: DataTypes.INTEGER, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: 'album',
    timestamps: false
});

const Track_artist = sequelize.define('track_artist', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_track: { type: DataTypes.INTEGER, allowNull: false },
    id_artist: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: 'track_artist',
    timestamps: false
});

const Artist = sequelize.define('artist', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
}, {
    tableName: 'artist',
    timestamps: false
});

const Album_artist = sequelize.define('user_event', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_artist: { type: DataTypes.INTEGER, allowNull: false },
    id_album: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: 'album_artist',
    timestamps: false
});

// Определение связей между моделями
Artist.belongsToMany(Album, { through: Album_artist });
Album.belongsToMany(Artist, { through: Album_artist });

Artist.belongsToMany(Track, { through: Track_artist });
Track.belongsToMany(Artist, { through: Track_artist });

Album.belongsToMany(Track, { through: Track_album });
Track.belongsToMany(Album, { through: Track_album });

User.hasOne(Session, { foreignKey: 'user_id' });
Session.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Track_history, { foreignKey: 'user_id' });
Track_history.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Track_queue, { foreignKey: 'user_id' });
Track_queue.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
    User,
    Track_queue,
    Track_history,
    Track,
    Track_album,
    Album,
    Track_artist,
    Artist,
    Album_artist,
};