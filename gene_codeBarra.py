from barcode import Code128
from barcode.writer import ImageWriter

# Usaremos un enlace corto para que quepa en el código de barras
short_url = "https://open.spotify.com/artist/1Yj5Xey7kTwvZla8sqdsdE"

# Generar código de barras tipo Code128
barcode_obj = Code128(short_url, writer=ImageWriter())

# Guardar imagen
barcode_path = "codeBarre/cris_mj_spotify_barcode"
barcode_obj.save(barcode_path)

barcode_path + ".png"
