
if( typeof module !== 'undefined' )
require( 'wfilesfiltersurrogate' )

var _ = wTools;

/* making file tree cache */

var testDir = _.pathJoin( __dirname, 'SurrogateSample' );
var filePath = _.pathJoin( testDir, 'file.txt' );

_.fileProvider.fileDelete( testDir );

var rootPath = _.pathDir( testDir );

var tree = _.FileFilter.Surrogate.filesTreeMake( rootPath );

/* making filter*/

var filter = _.FileFilter.Surrogate
({
  tree : tree,
  rootPath : rootPath
});

/* getting files list using absolute path */

// var files = filter.directoryRead( rootPath );
// console.log( rootPath + ": \n", files );

/* creating new file */

// filter.fileWrite( filePath, 'abc' );
// var files = filter.directoryRead( _.pathDir( filePath ) )
// console.log( files );

/* creating new testDir */

// filter.fileDelete( testDir );
// filter.directoryMake( testDir );
// var files = filter.directoryRead( _.pathDir( testDir ) )
// console.log( files );

/* deleting file */

// filter.fileWrite( filePath, 'abc' );
// var files = filter.directoryRead( _.pathDir( filePath ) )
// console.log( files );
// debugger
// filter.fileDelete( filePath );
// var files = filter.directoryRead( _.pathDir( filePath ) )
// console.log( files );

/* rename file */

// filter.fileWrite( filePath, 'abc' );
// var files = filter.directoryRead( testDir );
// console.log( files );
// filter.fileRename( _.pathJoin( testDir, 'file.js' ), filePath );
// var files = filter.directoryRead( testDir );
// console.log( files );

/* copying */

// filter.fileDelete( testDir );
// filter.fileWrite( filePath, 'abc' );
// var filePath2 = _.pathJoin( testDir, 'file.js' );
// filter.fileCopy( filePath2, filePath );
// var files = filter.directoryRead( testDir );
// console.log( files );

/* exchange files */

// filter.fileDelete( testDir );
// var path1 = _.pathJoin( testDir, 'dir1/file1.txt' );
// var path2 = _.pathJoin( testDir, 'dir2/file2.txt' );
// filter.fileWrite( path1, 'abc' )
// filter.fileWrite( path2, 'bca' )
// filter.fileExchange( _.pathDir( path1 ), _.pathDir( path2 ) );
// console.log( filter.tree[ _.pathName( testDir ) ] );
