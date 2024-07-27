/*{
  "id": "1121429554",
  "title": "Chạy Về Khóc Với Anh",
  "album": "Chạy Về Khóc Với Anh(Single)",
  "artist": "ERIK",
  "source": "https://thantrieu.com/resources/music/1121429554.mp3",
  "image": "https://thantrieu.com/resources/arts/1121429554.webp",
  "duration": 224,
  "favorite": "false",
  "counter": 20,
  "replay": 0
},*/

import 'package:flutter/foundation.dart';

class Song {
  Song(
      {required this.id,
      required this.title,
      required this.album,
      required this.image,
      required this.duration,
      required this.artist,
      required this.source});

  factory Song.fromJson(Map<String, dynamic> map) {
    return Song(
        id: map['id'],
        title: map['title'],
        album: map['album'],
        image: map['image'],
        duration: map['duration'],
        artist: map['artist'],
        source: map['source']);
  }

  String id;
  String title;
  String album;
  String source;
  String image;
  int duration;
  String artist;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Song && runtimeType == other.runtimeType && id == other.id;
  @override
  // TODO: implement hashCode
  int get hashCode => id.hashCode;

  @override
  String toString() {
    // TODO: implement toString
    return 'Song{ id: $id, title: $title}';
  }
}
