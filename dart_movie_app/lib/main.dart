import 'package:flutter/material.dart';
// TODO: Remove the following line when your SDK has been generated
// import './generated/movies.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class FakeMovie {
  FakeMovie(this.title);
  String title;
}

class _MyHomePageState extends State<MyHomePage> {
  final List<FakeMovie> _movies = [FakeMovie("The Mat-Rix")];
  // TODO: Replace the line above with
  // List<ListMoviesMovies> _movies = [];
  @override
  void initState() {
    super.initState();

    /// TODO: Uncomment the following lines to update the movies state when data
    /// comes back from the server.
    // MoviesConnector.instance.dataConnect
    //     .useDataConnectEmulator('localhost', 9399);
    // MoviesConnector.instance.listMovies.ref().subscribe().listen((res) {
    // setState({
    //   _movies = res.data.movies;
    // });
    //   _movies = res.data.movies;
    // });
  }

  void _refreshData() {
    // Gets the data, then notifies the subscriber(s) of the new data.
    // TODO: Uncomment the following line to execute the query
    // MoviesConnector.instance.listMovies.ref().execute();
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // TRY THIS: Try changing the color here to a specific color (to
        // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
        // change color while the other colors stay the same.
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          //
          // TRY THIS: Invoke "debug painting" (choose the "Toggle Debug Paint"
          // action in the IDE, or press "p" in the console), to see the
          // wireframe for each widget.
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            FloatingActionButton(
              onPressed: _refreshData,
              tooltip: 'Refresh',
              child: const Icon(Icons.refresh),
            ), // This trailing comma makes auto-formatting nicer for build methods.
            const Center(
              child: Text(
                  "If you're seeing this, open lib/main.dart and implement the TODOs"),
            ),
            Expanded(
              child: ListView.builder(
                itemBuilder: (BuildContext context, int index) {
                  return Container(
                      child: Card(
                          child: Padding(
                              padding: EdgeInsets.all(50.0),
                              child: Text(
                                _movies[index].title,
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ))));
                },
                itemCount: _movies.length,
              ),
            )
          ],
        ),
      ),
    );
  }
}
