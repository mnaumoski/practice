SELECT top5000.position, top5000.artist, top5000.year, top5000.song, albums.album
FROM top5000
inner JOIN albums on top5000.artist=albums.artist AND top5000.year = albums.year
ORDER BY top5000.position;


SELECT top5000.artist, top5000.year, top5000.song, albums.album
FROM top5000
LEFT JOIN albums
ON top5000.artist=albums.artist
ORDER BY albums.year;