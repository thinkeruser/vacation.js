module.exports = {
	build:{
		dist:"./resource/dest",
		// src 的作用： 根据文件到 src 的相对路径生成 发布到 dest 目录时的路径
		src:"./resource/src",
		base:"./resource/src/script",
		www:"./",
		pkg:[
			{
				main:/page\/a\.js$/,
				dist_rule:"$dir/$file.js",
				sub:[
					{
						//dist_rule:"$dir/../../$pkg.js",
						dist_rule:"$dir/../../../modules.js",
						contain:[
							/module\/.+\.js/
						]
					}
				],
				except:[
					///\blib\/a/
				]
			}
		],
		paths:{
			tpl:'./resource/src/tpl',
			css:'./resource/src/style'
		},
		alias:{},
		available:[],
		ignore:[
			// 部署目录
			"$dist",
			/^vacation\.json/,
			/^map\.json/,
			/\.md$/,
			// linux 隐藏文件
			/(^|\/)\./
		],
		availableType:["js","css","html"],
		uglify:{
			banner:"/*! lastmodify: $$today('yyyy-mm-dd HH:MM:ss') */\n",
			mangle:{
				except:["require","exports","module"]
			}
		}
	},
	server:{
		port:8181,
		defaultFile:"index.html",
		root:"./",
		rootRelative:"cwd",
		allowOrigin:""
	},
	contentType:{
		json:"application/json"
	}
};
