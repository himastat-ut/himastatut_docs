import os
import time
import platform

# Fungsi untuk membersihkan layar (fungsi clear/cls)
def clear_screen():
    system_name = platform.system().lower()
    if system_name == 'windows':
        os.system('cls')  # Untuk Windows
    else:
        os.system('clear')  # Untuk Mac/Linux

# Daftar path folder yang akan diproses
root_dir = 'src'  # Anda bisa mengubah ini dengan folder root yang ingin diproses

def rename_files_and_folders(root_dir):
    # Menelusuri seluruh folder dan subfolder
    for dirpath, dirnames, filenames in os.walk(root_dir, topdown=False):
        # Mengecek apakah folder ini adalah .vuepress, jika ya, lewati
        if '.vuepress' in dirpath:
            continue
        
        # Mengecek folder terlebih dahulu, termasuk semua subfolder
        for dirname in dirnames:
            # Mengecek jika ada huruf kapital atau karakter _
            if any(c.isupper() for c in dirname) or "_" in dirname:
                old_path = os.path.join(dirpath, dirname)
                new_name = input(f"Nama folder ditemukan: {old_path}\nMasukkan nama baru untuk folder: ")
                if new_name:  # Jika ada nama baru yang diberikan
                    new_path = os.path.join(dirpath, new_name)
                    os.rename(old_path, new_path)
                    clear_screen()  # Membersihkan layar setelah perubahan
                    print(f"Folder berhasil diganti menjadi: {new_path}\n")

        # Kemudian mengecek file-file di dalam folder
        for filename in filenames:
            # Mengecualikan file README.md dan folder .vuepress
            if filename == 'README.md':
                continue
            
            # Cek file dengan pola 'pertemuan_1.md' hingga 'pertemuan_10.md' (termasuk 1 digit)
            if filename.startswith('pertemuan_') and filename[10:12].isdigit():
                number = filename[10:12]  # Ambil angka setelah 'pertemuan_'
                
                # Jika angka hanya satu digit, tambahkan 0 di depannya
                if len(number) == 1:
                    new_name = filename.replace('pertemuan_', 'pertemuan-0' + number)
                else:
                    new_name = filename.replace('_', '-')
                
                old_path = os.path.join(dirpath, filename)
                new_path = os.path.join(dirpath, new_name)
                os.rename(old_path, new_path)
                clear_screen()  # Membersihkan layar setelah perubahan
                print(f"File berhasil diganti menjadi: {new_path}\n")

            # Mengecek jika ada huruf kapital atau karakter _
            elif any(c.isupper() for c in filename) or "_" in filename:
                old_path = os.path.join(dirpath, filename)
                ext = os.path.splitext(filename)[1]  # Mendapatkan ekstensi file
                new_name = input(f"Nama file ditemukan: {old_path}\nMasukkan nama baru untuk file (tanpa ekstensi): ")
                if new_name:  # Jika ada nama baru yang diberikan
                    new_path = os.path.join(dirpath, new_name + ext)  # Menambahkan ekstensi ke nama baru
                    os.rename(old_path, new_path)
                    clear_screen()  # Membersihkan layar setelah perubahan
                    print(f"File berhasil diganti menjadi: {new_path}\n")

# Menjalankan fungsi untuk mengganti nama folder dan file
clear_screen()  # Membersihkan layar di awal
rename_files_and_folders(root_dir)
