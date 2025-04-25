<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_dp' );

/** Database username */
define( 'DB_USER', 'wordpress_user' );

/** Database password */
define( 'DB_PASSWORD', 'sandi_wordpress' );

/** Database hostname */
define( 'DB_HOST', 'mysql-server' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's]xwcI cx+}>(J$`f{P#;@WVY,KzTb?+,v!M /y~7/ovm`mWZ_OM_,Lw`:1zS+>j' );
define( 'SECURE_AUTH_KEY',  'dGI sSSq%Qj;v34Nn8HV0!^Cd[3lJd*sEb]Y^Pv0Hs(@m< _|60)N]G.=|*F6QW!' );
define( 'LOGGED_IN_KEY',    'JBSrmh)j?VEzG]8[u|jQXJL>/co;Rfj}6hR*]Kk^>#)`t&?JL[/r`eFE;4,uE*J[' );
define( 'NONCE_KEY',        'K2j6_!hJ:6w[JdXQ>FW B:g7Vhh%U06f|)DJ8k-zh_-Pexh#Vg/hM3 tx4k[ipu^' );
define( 'AUTH_SALT',        '*5yTU*xb*6Bk{6eC;SJ~|8^K,nE(Z(o?GNa$0kohr`{Tauv%Tj9;%; cNWVaFc6^' );
define( 'SECURE_AUTH_SALT', 'hdp?Od#*A5G{0j!Or(2X~ubs@>jjJa `Jkwsuz2|PoFod+X.>9n)frHlXArJTW,O' );
define( 'LOGGED_IN_SALT',   'J@AJBpA}#Tz]zZ@6eXnGT`#r7._gQAY6t8s11-}QNZ@LzwKPFLa*4e8=<YG%mh#d' );
define( 'NONCE_SALT',       'K)7Bfo^j[K}=WnPE)B]@zzz@$;_FtzG# 7ny.rnLm9iCNL5SCK#eNBX5QQS=6@M/' );

define('FS_METHOD', 'direct');
define( 'WP_REDIS_HOST', 'redis-server' );
define( 'WP_REDIS_PORT', 6379 );
define( 'WP_REDIS_PREFIX', 'dolanan' );
define( 'WP_REDIS_DATABASE', 0 ); // 0-15
define( 'WP_REDIS_TIMEOUT', 1 );
define( 'WP_REDIS_READ_TIMEOUT', 1 );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
