/*
Basic device detection module for mobile
*/
( function ( mw ) {
	var name,
		ua = navigator.userAgent;

	if ( ua.match( /iphone/i ) ) {
		name = 'iphone';
	} else if ( ua.match( /ipad/i ) ) {
		name = 'ipad';
	} else if ( ua.match( /android/i ) ) {
		name = 'android';
	} else {
		name = 'unknown';
	}
	if ( name ) {
		mw.config.set( 'wgMobileDeviceName', name );
	}
}( mediaWiki ) );
