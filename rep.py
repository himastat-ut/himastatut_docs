import os

# Fungsi untuk menambahkan teks di akhir file .md
def add_text_to_md_file(file_path, text_to_add):
    try:
        with open(file_path, 'a') as file:
            file.write("\n" + text_to_add)  # Menambahkan teks di akhir file
        print(f"Menambahkan teks ke: {file_path}")
    except Exception as e:
        print(f"Gagal menambahkan teks ke {file_path}: {e}")

# Fungsi untuk mencari dan memproses semua file .md dalam folder dan subfolder
def process_md_files_in_directory(directory, text_to_add):
    for root, dirs, files in os.walk(directory):  # Mencari di folder dan subfolder
        for file in files:
            if file.endswith('.md'):  # Memeriksa apakah file berakhiran .md
                file_path = os.path.join(root, file)
                add_text_to_md_file(file_path, text_to_add)

# Teks yang ingin ditambahkan di akhir file
text_to_add = """## Bagikan
<Share colorful />
<GitContributors />
<GitChangelog />"""

# Direktori yang ingin diproses
directory = "src"  # Ganti dengan path folder yang sesuai

# Memulai proses
process_md_files_in_directory(directory, text_to_add)
