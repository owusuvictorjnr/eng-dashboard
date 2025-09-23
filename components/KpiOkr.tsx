"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

function KpiOkr() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <div className="bg--200">
        <Card className="bg-red-200 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>KPI Title</CardTitle>
            <CardDescription>KPI Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Current Value: 100</p>
            <p>Target Value: 150</p>
          </CardContent>
          <CardFooter>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              View Details
            </button>
          </CardFooter>
        </Card>
      </div>

      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>KPI Title</CardTitle>
            <CardDescription>KPI Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Current Value: 100</p>
            <p>Target Value: 150</p>
          </CardContent>
          <CardFooter>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              View Details
            </button>
          </CardFooter>
        </Card>
      </div>

      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>KPI Title</CardTitle>
            <CardDescription>KPI Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Current Value: 100</p>
            <p>Target Value: 150</p>
          </CardContent>
          <CardFooter>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              View Details
            </button>
          </CardFooter>
        </Card>
      </div>

      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>KPI Title</CardTitle>
            <CardDescription>KPI Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Current Value: 100</p>
            <p>Target Value: 150</p>
          </CardContent>
          <CardFooter>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              View Details
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default KpiOkr;
