#!/bin/bash
trap "exit" INT
echo "-- Checking your machine type..."

# Now we need to detect the platform we're running on (Linux / Mac / Other)
# so we can fetch the correct binary and place it in the correct location
# on the machine.

# We use "tr" to translate the uppercase "uname" output into lowercase
UNAME=$(uname -s | tr '[:upper:]' '[:lower:]')

# Then we map the output to the names used on the Github releases page
case "$UNAME" in
    linux*)     MACHINE=linux;;
    darwin*)    MACHINE=macos;;
esac

# If we never define the $MACHINE variable (because our platform is neither Mac
# or Linux), then we can't finish our job, so just log out a helpful message
# and close.
if [ -z "$MACHINE" ]
then
    echo "Your operating system is not supported: $UNAME."
    sorry
fi

# Ditto for detecting the architecture.

uname_m=$(uname -m)
case $uname_m in
  aarch64) ARCH=arm64 ;;
  arm64) ARCH=arm64 ;;
  x86_64) ARCH=amd64 ;;
esac

if [ -z "$ARCH" ]
then
    echo "Your architecture is not supported: $uname_m."
    sorry
fi
path_str="export PATH=\$PATH"
if ! [ -x "$(command -v flutter)" ]; then
  echo '-- Flutter not found.' >&2
  echo "-- Installing Flutter"

  if [ "$MACHINE" = macos ]; then
    if [ "$ARCH" = amd64 ]; then
      export FLUTTER_DOWNLOAD_PATH="https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_3.24.3-stable.zip"
      export FLUTTER_FILE_NAME="flutter_macos_3.24.3-stable.zip"
    else
      export FLUTTER_DOWNLOAD_PATH="https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_arm64_3.24.3-stable.zip"
      export FLUTTER_FILE_NAME="flutter_macos_arm64_3.24.3-stable.zip"
    fi
  else
    export FLUTTER_DOWNLOAD_PATH="https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.24.3-stable.tar.xz"
    export FLUTTER_FILE_NAME="flutter_linux_3.24.3-stable.tar.xz"
  fi


  mkdir -p ~/development
  mkdir -p ~/.cache
  export FLUTTER_FILE_PATH="$HOME/.cache/$FLUTTER_FILE_NAME"

  if [ -f $FLUTTER_FILE_PATH ]; then
    echo "-- skipping download of flutter zip"
  else
    echo "-- Downloading flutter"
    curl -f -o "$FLUTTER_FILE_PATH" -L --progress-bar $FLUTTER_DOWNLOAD_PATH || sorry
  fi

  if [ "$MACHINE" = macos ]; then
    echo "-- Unzipping flutter"
    unzip $FLUTTER_FILE_PATH \
        -d ~/development/
  else
    echo "-- Untarring flutter"
    tar -xf $FLUTTER_FILE_PATH -C ~/development/
  fi
  path_str+=":$HOME/development/flutter/bin"

else
    echo "-- Flutter installation found. Skipping installation."
fi

if ! [ -x "$(command -v flutterfire)" ]; then
  echo "-- Installing flutterfire"
  export PATH="$HOME/development/flutter/bin:$HOME/.pub-cache/bin:$PATH"
  echo "Please add the following line to either your ~/.profile or ~/.bash_profile, then restart your terminal."
  echo ""
  echo "$path_str:$HOME/.pub-cache/bin"
  echo ""
  echo "For more information about modifying PATHs, see https://unix.stackexchange.com/a/26059"
  echo ""
  dart pub global activate flutterfire_cli
else
  echo "-- 'flutterfire' command found. Skipping installation"
fi

cd dart_movie_app
read -p "Enter Firebase Project ID: " projectId
firebase use $projectId
flutterfire configure --project $projectId -a com.example.dart_movie_app # Set up flutterfire with your firebase project
flutter pub get
cd ..
