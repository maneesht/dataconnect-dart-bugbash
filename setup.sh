#!/bin/bash
trap "exit" INT
echo "Downloading and installing VSCode for Dart"
curl "https://firebasestorage.googleapis.com/v0/b/getting-started-dart-storage.appspot.com/o/firebase-vscode-0.5.7-dart3.vsix?alt=media&token=7019cd11-d7d0-4039-b72d-426d7cb00d02" > ~/.cache/firebase-vscode-dart.vsix && code --install-extension ~/.cache/firebase-vscode-dart.vsix  
dart pub global activate flutterfire_cli & # install flutterfire CLI
npm install && npm run download:sdk & # Install node dependencies
wait # wait for parallel tasks to finish
firebase init dataconnect
cd dart_movie_app
flutter pub get
cd ..
