from pathlib import Path
from flask import Flask, jsonify

def obtener_nombres_archivos(directorio):
    return [f.name for f in Path(directorio).iterdir() if f.is_file()]

app = Flask(__name__)

@app.route('/nombres_archivos')
def nombres_archivos():
    directorio = '../img'
    archivos = obtener_nombres_archivos(directorio)
    return jsonify(archivos)
if __name__ == '__main__':
    app.run()
  