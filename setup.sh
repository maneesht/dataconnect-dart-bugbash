#!/bin/bash
trap "exit" INT
echo "Downloading and installing VSCode for Dart"
curl "https://firebasestorage.googleapis.com/v0/b/getting-started-dart-storage.appspot.com/o/firebase-vscode-0.9.1-dart.vsix?alt=media&token=73876059-e47a-4a84-9464-949ec4961ca8" > ~/.cache/firebase-vscode-0.9.1-dart.vsix && code --install-extension ~/.cache/firebase-vscode-0.9.1-dart.vsix --force 
dart pub global activate flutterfire_cli & # install flutterfire CLI
cd setup && npm install && npm run download:sdk & # Install node dependencies
wait # wait for parallel tasks to finish
cd ../
firebase init dataconnect
cd dart_movie_app
read -p "Enter Firebase Project ID: " projectId
flutterfire configure --project $projectId -a com.example.dart_movie_app # Set up flutterfire with your firebase project
flutter pub get
cd ..
