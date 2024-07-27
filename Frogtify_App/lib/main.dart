
import 'package:frogtify_app/data/model/song.dart';
import 'package:frogtify_app/data/repository/repository.dart';
// import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:frogtify_app/ui/home/home.dart';


// void main() async {
//   var repository = DefaultRepository();
//   var songs = await repository.loadData();
//   if (songs != null) {
//     for (var song in songs) {
//       print(song.toString());
//     }
//   }
// }



void main() => runApp(const MusicApp());